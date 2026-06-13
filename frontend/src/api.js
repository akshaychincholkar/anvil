const req = async (method, path, body) => {
  const res = await fetch(`/api${path}`, {
    method,
    headers: body !== undefined ? { "Content-Type": "application/json" } : {},
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
  if (res.status === 204) return null;
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `HTTP ${res.status}`);
  }
  return res.json();
};

export const api = {
  // Pillars
  getPillars: () => req("GET", "/pillars"),

  // Tasks
  getTasks: () => req("GET", "/tasks"),
  createTask: (data) => req("POST", "/tasks", data),
  updateTask: (id, data) => req("PUT", `/tasks/${id}`, data),
  deleteTask: (id) => req("DELETE", `/tasks/${id}`),
  scheduleTask: (id) => req("PUT", `/tasks/${id}/schedule`),

  // Goals
  getGoals: (pillar) => req("GET", `/goals${pillar ? `?pillar=${encodeURIComponent(pillar)}` : ""}`),
  createGoal: (data) => req("POST", "/goals", data),
  updateGoal: (id, data) => req("PUT", `/goals/${id}`, data),
  deleteGoal: (id) => req("DELETE", `/goals/${id}`),

  // Habits
  getHabits: () => req("GET", "/habits"),
  createHabit: (data) => req("POST", "/habits", data),
  updateHabit: (id, data) => req("PUT", `/habits/${id}`, data),
  deleteHabit: (id) => req("DELETE", `/habits/${id}`),
  toggleHabitLog: (id, date) => req("POST", `/habits/${id}/log/${date}`),

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

  // Spiritual
  getScriptures: () => req("GET", "/scriptures"),
  createScripture: (data) => req("POST", "/scriptures", data),
  addChapter: (scriptureId, data) => req("POST", `/scriptures/${scriptureId}/chapters`, data),
  updateChapter: (id, data) => req("PUT", `/chapters/${id}`, data),
  addInsight: (chapterId, text) => req("POST", `/chapters/${chapterId}/insights`, { text }),
  deleteInsight: (id) => req("DELETE", `/insights/${id}`),

  // Revision
  getTopics: () => req("GET", "/revision/topics"),
  createTopic: (data) => req("POST", "/revision/topics", data),
  deleteTopic: (id) => req("DELETE", `/revision/topics/${id}`),
  getDueToday: () => req("GET", "/revision/due-today"),
  getCalendar: (year, month) => req("GET", `/revision/calendar/${year}/${month}`),
  toggleReviewDone: (id) => req("PUT", `/revision/reviews/${id}/done`),
};
