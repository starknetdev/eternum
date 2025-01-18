import BuildingCard from "../components/BuildingCard";

const BUILDINGS = [
  "archery",
  "barracks",
  "dragonhide",
  "farm",
  "fishing_village",
  "forge",
  "lumber_mill",
  "market",
  "mine",
  "stable",
  "storehouse",
  "workers_hut",
];

export default function Construction() {
  const handleBuild = (buildingName: string) => {
    console.log(`Building ${buildingName}`);
    // TODO: Implement actual building logic
  };

  return (
    <div className="space-y-6">
      <div className="bg-gray-800 shadow-xl rounded-lg p-6">
        <h1 className="text-3xl font-bold text-white mb-4">Construction</h1>
        <p className="text-gray-300">Select a building to construct</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {BUILDINGS.map((building) => (
          <BuildingCard
            key={building}
            name={building}
            imagePath={`/images/construction/${building}.png`}
            onBuild={() => handleBuild(building)}
          />
        ))}
      </div>
    </div>
  );
}
