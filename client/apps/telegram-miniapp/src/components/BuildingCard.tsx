interface BuildingCardProps {
  name: string;
  imagePath: string;
  onBuild: () => void;
}

export default function BuildingCard({ name, imagePath, onBuild }: BuildingCardProps) {
  const formattedName = name
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:border-gray-600 transition-colors">
      <div className="aspect-square relative bg-gray-900 p-4">
        <img src={imagePath} alt={formattedName} className="w-full h-full object-contain" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-3 text-center">{formattedName}</h3>
        <button
          onClick={onBuild}
          className="w-full bg-green-600 hover:bg-green-500 text-white font-medium py-2 px-4 rounded-md
                   transition-colors duration-200 border-0 shadow-sm hover:shadow-md"
        >
          Build
        </button>
      </div>
    </div>
  );
}
