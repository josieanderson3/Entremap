// Old code: 15 - resultSet.GrowthMindset.Total / ResultFeedback.GrowthMindset.Total.scale.max
// New code: resultSet.GrowthMindset.Total / ResultFeedback.GrowthMindset.Total.scale.max
const GrowthMindSetTotal = 5
const GrowthMindSetTotalMax = 15
// Old code returns a 0
expect(GrowthMindSetTotal/GrowthMindSetTotalMax).not.toEqual(0)