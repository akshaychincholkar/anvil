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
  me: () => req("GET", "/auth/me"),

  // Google Sign-In
  signInWithGoogle: () => { window.location.href = "/api/auth/google"; },

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

  // Tesla 369 method (per dream)
  logTesla369: (id) => req("POST", `/golden/goals/${id}/369/log`),
  undoTesla369: (id) => req("DELETE", `/golden/goals/${id}/369/log`),

  // Kickstart (motivation videos)
  getKickstart: () => req("GET", "/kickstart/videos"),
  createKickstart: (data) => req("POST", "/kickstart/videos", data),
  updateKickstart: (id, data) => req("PUT", `/kickstart/videos/${id}`, data),
  deleteKickstart: (id) => req("DELETE", `/kickstart/videos/${id}`),
  restoreKickstart: (id) => req("POST", `/kickstart/videos/${id}/restore`),

  // Wallet (finance)
  getTxns: () => req("GET", "/finance/txns"),
  createTxn: (data) => req("POST", "/finance/txns", data),
  updateTxn: (id, data) => req("PUT", `/finance/txns/${id}`, data),
  deleteTxn: (id) => req("DELETE", `/finance/txns/${id}`),
  restoreTxn: (id) => req("POST", `/finance/txns/${id}/restore`),

  // Wallet investments (asset generation)
  getInvestments: () => req("GET", "/finance/investments"),
  createInvestment: (data) => req("POST", "/finance/investments", data),
  updateInvestment: (id, data) => req("PUT", `/finance/investments/${id}`, data),
  deleteInvestment: (id) => req("DELETE", `/finance/investments/${id}`),
  restoreInvestment: (id) => req("POST", `/finance/investments/${id}/restore`),

  // Wallet fixed items (recurring EMI/rent/SIP — auto-posted each billing cycle)
  getFixedItems: () => req("GET", "/finance/fixed-items"),
  createFixedItem: (data) => req("POST", "/finance/fixed-items", data),
  updateFixedItem: (id, data) => req("PUT", `/finance/fixed-items/${id}`, data),
  deleteFixedItem: (id) => req("DELETE", `/finance/fixed-items/${id}`),

  // Expenses (icon-based daily spend tracker)
  getExpenses: () => req("GET", "/expenses"),
  createExpenseCategory: (data) => req("POST", "/expenses/categories", data),
  updateExpenseCategory: (id, data) => req("PUT", `/expenses/categories/${id}`, data),
  arrangeExpenseCategories: (order) => req("PUT", "/expenses/categories/arrange", { order }),
  deleteExpenseCategory: (id) => req("DELETE", `/expenses/categories/${id}`),
  createExpenseLog: (data) => req("POST", "/expenses/logs", data),
  updateExpenseLog: (id, data) => req("PUT", `/expenses/logs/${id}`, data),
  deleteExpenseLog: (id) => req("DELETE", `/expenses/logs/${id}`),
  restoreExpenseLog: (id) => req("POST", `/expenses/logs/${id}/restore`),

  // Trading Journal (open → book flow; P/L auto-computed from prices × qty)
  getTrades: () => req("GET", "/trades"),
  createTradeEntry: (data) => req("POST", "/trades/entries", data),
  updateTradeEntry: (id, data) => req("PUT", `/trades/entries/${id}`, data),
  bookTradeEntry: (id, outcome, date) => req("POST", `/trades/entries/${id}/book`, { outcome, date }),
  reopenTradeEntry: (id) => req("POST", `/trades/entries/${id}/reopen`),
  deleteTradeEntry: (id) => req("DELETE", `/trades/entries/${id}`),
  setTradeLearning: (date, learning) => req("PUT", "/trades/learning", { date, learning }),

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
  incrementHabitLog: (id, date) => req("POST", `/habits/${id}/log/${date}/increment`),
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

  // Bucket List (materialistic wishes, priority-ordered)
  getBucket: () => req("GET", "/bucket"),
  createBucketWish: (data) => req("POST", "/bucket", data),
  updateBucketWish: (id, data) => req("PUT", `/bucket/${id}`, data),
  fulfillBucketWish: (id) => req("POST", `/bucket/${id}/fulfill`),
  arrangeBucket: (order) => req("PUT", "/bucket/arrange", { order }),
  deleteBucketWish: (id) => req("DELETE", `/bucket/${id}`),
  restoreBucketWish: (id) => req("POST", `/bucket/${id}/restore`),

  // Challenges (money-goal steps toward success)
  getChallenges: () => req("GET", "/challenges"),
  createChallenge: (data) => req("POST", "/challenges", data),
  updateChallenge: (id, data) => req("PUT", `/challenges/${id}`, data),
  deleteChallenge: (id) => req("DELETE", `/challenges/${id}`),
  restoreChallenge: (id) => req("POST", `/challenges/${id}/restore`),

  // Achievements
  getAchievements: () => req("GET", "/achievements"),
  createAchievement: (data) => req("POST", "/achievements", data),
  updateAchievement: (id, data) => req("PUT", `/achievements/${id}`, data),
  deleteAchievement: (id) => req("DELETE", `/achievements/${id}`),
  restoreAchievement: (id) => req("POST", `/achievements/${id}/restore`),

  // Delights (customizable collections)
  getDelight: () => req("GET", "/delight"),
  createCollection: (data) => req("POST", "/delight/collections", data),
  updateCollection: (id, data) => req("PUT", `/delight/collections/${id}`, data),
  deleteCollection: (id) => req("DELETE", `/delight/collections/${id}`),
  restoreCollection: (id) => req("POST", `/delight/collections/${id}/restore`),
  createDelightItem: (cid, data) => req("POST", `/delight/collections/${cid}/items`, data),
  updateDelightItem: (id, data) => req("PUT", `/delight/items/${id}`, data),
  deleteDelightItem: (id) => req("DELETE", `/delight/items/${id}`),
  restoreDelightItem: (id) => req("POST", `/delight/items/${id}/restore`),
  arrangeDelight: (cid, order) => req("PUT", `/delight/collections/${cid}/arrange`, { order }),
};
