import { getAchievementsData } from "@/services/achievements";

export default async function AchievementsPage() {
  const achievements = await getAchievementsData({});

  return (
    <div>
      <h1>Achievements</h1>
      <ul>
        {achievements &&
          achievements.map((a: any) => (
            <li key={a.id}>
              <strong>{a.name}</strong>: {a.description}
            </li>
          ))}
      </ul>
    </div>
  );
}
