const TOKEN_KEY = "anvil_token";
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const setToken = (t) => localStorage.setItem(TOKEN_KEY, t);
export const clearToken = () => localStorage.removeItem(TOKEN_KEY);

const req = async (method, path, body) => {
  const headers = {};
  if (body !== undefined) headers["Content-Type"] = "application/json";
  const token = getToken();
  if (token) headers["Authorization"] = `Bearer ${token}`;
  const res = await fetch(`/api${path}`, {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
  if (res.status === 401) {
    // Session expired / invalid — drop token and bounce to login.
    clearToken();
    window.dispatchEvent(new Event("anvil-unauthorized"));
    throw new Error("Not authenticated");
  }
  if (res.status === 204) return null;
  if (!res.ok) {
    const text = await res.text();
    let msg = text;
    try { msg = JSON.parse(text).detail || text; } catch { /* keep text */ }
    throw new Error(msg || `HTTP ${res.status}`);
  }
  return res.json();
};

export const api = {
  // Auth
  register: (data) => req("POST", "/auth/register", data),
  login: (data) => req("POST", "/auth/login", data),
  me: () => req("GET", "/auth/me"),

  // Google Calendar auth
  getGcalStatus: () => req("GET", "/auth/google/status"),
  connectGoogle: () => { window.location.href = `/api/auth/google?token=${encodeURIComponent(getToken() || "")}`; },
  disconnectGoogle: () => req("DELETE", "/auth/google"),

  // Pillars
  getPillars: () => req("GET", "/pillars"),

  // Grove (focus / pomodoro)
  getFocus: () => req("GET", "/focus"),
  createFocus: (data) => req("POST", "/focus", data),
  deleteFocus: (id) => req("DELETE", `/focus/${id}`),

  // Rewards (screen time + payouts)
  addScreenTime: (screen, seconds) => req("POST", "/screentime", { screen, seconds }),
  getScreenTime: () => req("GET", "/screentime"),
  getPayouts: () => req("GET", "/rewards/payouts"),
  createPayout: (data) => req("POST", "/rewards/payouts", data),
  deletePayout: (id) => req("DELETE", `/rewards/payouts/${id}`),
  getRewardRates: () => req("GET", "/rewards/rates"),
  setRewardRate: (data) => req("POST", "/rewards/rates", data),

  // Mindscape (audio-only media)
  getMedia: () => req("GET", "/media"),
  createMedia: (data) => req("POST", "/media", data),
  updateMedia: (id, data) => req("PUT", `/media/${id}`, data),
  deleteMedia: (id) => req("DELETE", `/media/${id}`),
  restoreMedia: (id) => req("POST", `/media/${id}/restore`),

  // Spiritual decks (user-created)
  getDecks: () => req("GET", "/spiritual/decks"),
  createDeck: (data) => req("POST", "/spiritual/decks", data),
  deleteDeck: (id) => req("DELETE", `/spiritual/decks/${id}`),

  // Golden Book (manifestation)
  getGoldenGoals: () => req("GET", "/golden/goals"),
  getGoldenGoal: (id) => req("GET", `/golden/goals/${id}`),
  createGolden: (data) => req("POST", "/golden/goals", data),
  updateGolden: (id, data) => req("PUT", `/golden/goals/${id}`, data),
  achieveGolden: (id) => req("POST", `/golden/goals/${id}/achieve`),
  unachieveGolden: (id) => req("POST", `/golden/goals/${id}/unachieve`),
  upsertGoldenEntry: (id, data) => req("PUT", `/golden/goals/${id}/entry`, data),
  deleteGolden: (id) => req("DELETE", `/golden/goals/${id}`),
  restoreGolden: (id) => req("POST", `/golden/goals/${id}/restore`),

  // Kickstart (motivation videos)
  getKickstart: () => req("GET", "/kickstart/videos"),
  createKickstart: (data) => req("POST", "/kickstart/videos", data),
  updateKickstart: (id, data) => req("PUT", `/kickstart/videos/${id}`, data),
  deleteKickstart: (id) => req("DELETE", `/kickstart/videos/${id}`),
  restoreKickstart: (id) => req("POST", `/kickstart/videos/${id}/restore`),

  // Vault (finance)
  getTxns: () => req("GET", "/finance/txns"),
  createTxn: (data) => req("POST", "/finance/txns", data),
  updateTxn: (id, data) => req("PUT", `/finance/txns/${id}`, data),
  deleteTxn: (id) => req("DELETE", `/finance/txns/${id}`),
  restoreTxn: (id) => req("POST", `/finance/txns/${id}/restore`),

  // Per-user settings (key/value)
  getSetting: (key) => req("GET", `/settings/${key}`),
  setSetting: (key, value) => req("PUT", `/settings/${key}`, { value }),

  // Tasks
  getTasks: () => req("GET", "/tasks"),
  createTask: (data) => req("POST", "/tasks", data),
  updateTask: (id, data) => req("PUT", `/tasks/${id}`, data),
  deleteTask: (id) => req("DELETE", `/tasks/${id}`),
  restoreTask: (id) => req("POST", `/tasks/${id}/restore`),
  scheduleTask: (id) => req("PUT", `/tasks/${id}/schedule`),

  // Goals
  getGoals: (pillar) => req("GET", `/goals${pillar ? `?pillar=${encodeURIComponent(pillar)}` : ""}`),
  createGoal: (data) => req("POST", "/goals", data),
  updateGoal: (id, data) => req("PUT", `/goals/${id}`, data),
  deleteGoal: (id) => req("DELETE", `/goals/${id}`),
  restoreGoal: (id) => req("POST", `/goals/${id}/restore`),

  // Habits
  getHabits: () => req("GET", "/habits"),
  createHabit: (data) => req("POST", "/habits", data),
  updateHabit: (id, data) => req("PUT", `/habits/${id}`, data),
  deleteHabit: (id) => req("DELETE", `/habits/${id}`),
  restoreHabit: (id) => req("POST", `/habits/${id}/restore`),
  toggleHabitLog: (id, date) => req("POST", `/habits/${id}/log/${date}`),
  setHabitLogNote: (id, date, note) => req("PUT", `/habits/${id}/log/${date}/note`, { note }),
  setHabitLogCount: (id, date, count, note) => req("PUT", `/habits/${id}/log/${date}/count`, { count, note }),
  clearHabitLog: (id, date) => req("DELETE", `/habits/${id}/log/${date}`),
  getHabitsYearly: (year) => req("GET", `/habits/yearly/${year}`),

  // Journal
  getJournalEntry: (date) => req("GET", `/journal/${date}`),
  getJournalHistory: (year, month) => req("GET", `/journal/history/${year}/${month}`),
  updateJournalMood: (date, mood) => req("PUT", `/journal/${date}`, { mood }),
  addJournalBullet: (date, section, text) => req("POST", `/journal/${date}/bullets`, { section, text }),
  deleteJournalBullet: (id) => req("DELETE", `/journal/bullets/${id}`),

  // Skills
  getSkills: () => req("GET", "/skills"),
  createSkill: (data) => req("POST", "/skills", data),
  updateSkill: (id, data) => req("PUT", `/skills/${id}`, data),
  deleteSkill: (id) => req("DELETE", `/skills/${id}`),
  restoreSkill: (id) => req("POST", `/skills/${id}/restore`),
  addSkillNote: (id, stage, text, grp = null) => req("POST", `/skills/${id}/notes`, { stage, text, grp }),
  setSkillGroups: (id, groups) => req("PUT", `/skills/${id}/groups`, { groups }),
  deleteSkillNote: (id) => req("DELETE", `/skill-notes/${id}`),
  updateSkillNote: (id, text) => req("PUT", `/skill-notes/${id}`, { text }),
  toggleSkillNote: (id) => req("PUT", `/skill-notes/${id}/toggle`),
  completeSkillStage: (id, stage) => req("POST", `/skills/${id}/complete-stage`, { stage }),

  // Spiritual
  getScriptures: () => req("GET", "/scriptures"),
  createScripture: (data) => req("POST", "/scriptures", data),
  deleteScripture: (id) => req("DELETE", `/scriptures/${id}`),
  restoreScripture: (id) => req("POST", `/scriptures/${id}/restore`),
  addChapter: (scriptureId, data) => req("POST", `/scriptures/${scriptureId}/chapters`, data),
  updateChapter: (id, data) => req("PUT", `/chapters/${id}`, data),
  deleteChapter: (id) => req("DELETE", `/chapters/${id}`),
  restoreChapter: (id) => req("POST", `/chapters/${id}/restore`),
  addInsight: (chapterId, text) => req("POST", `/chapters/${chapterId}/insights`, { text }),
  deleteInsight: (id) => req("DELETE", `/insights/${id}`),

  // Revision
  getTopics: () => req("GET", "/revision/topics"),
  createTopic: (data) => req("POST", "/revision/topics", data),
  updateTopic: (id, data) => req("PUT", `/revision/topics/${id}`, data),
  deleteTopic: (id) => req("DELETE", `/revision/topics/${id}`),
  restoreTopic: (id) => req("POST", `/revision/topics/${id}/restore`),
  getDueToday: () => req("GET", "/revision/due-today"),
  getCalendar: (year, month) => req("GET", `/revision/calendar/${year}/${month}`),
  toggleReviewDone: (id) => req("PUT", `/revision/reviews/${id}/done`),

  // Affirmations
  getAffirmations: () => req("GET", "/affirmations"),
  createAffirmation: (data) => req("POST", "/affirmations", data),
  updateAffirmation: (id, data) => req("PUT", `/affirmations/${id}`, data),
  deleteAffirmation: (id) => req("DELETE", `/affirmations/${id}`),
  restoreAffirmation: (id) => req("POST", `/affirmations/${id}/restore`),

  // Achievements
  getAchievements: () => req("GET", "/achievements"),
  createAchievement: (data) => req("POST", "/achievements", data),
  updateAchievement: (id, data) => req("PUT", `/achievements/${id}`, data),
  deleteAchievement: (id) => req("DELETE", `/achievements/${id}`),
  restoreAchievement: (id) => req("POST", `/achievements/${id}/restore`),
};
