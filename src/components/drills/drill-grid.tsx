import { publicJsonDrills } from "~/data/public-json-drills";
import { PublicDrill } from "~/components/drills/public-drill";

export const DrillGrid = () => {
  return (
    <div className="mt-10">
      {publicJsonDrills.map((drill) => {
        return <PublicDrill key={drill} drill={drill} />;
      })}
    </div>
  );
};
