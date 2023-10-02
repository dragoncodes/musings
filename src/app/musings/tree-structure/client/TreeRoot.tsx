"use client";

import { TreeBranch } from "./components/TreeBranch";
import { DepthContext } from "./context/DepthContext";
import { TreeLeaf } from "./types/TreeLeaf";

export function TreeRoot(props: { rootLevelNodes: TreeLeaf[] }) {
  return (
    <div className="mt-2 flex w-full flex-1 flex-col justify-start">
      <div className="text-white">
        <DepthContext.Provider value={0}>
          {props.rootLevelNodes.map((leaf) => (
            <TreeBranch key={`root-leaf-${leaf.name}`} leaf={leaf} />
          ))}
        </DepthContext.Provider>
      </div>
    </div>
  );
}
