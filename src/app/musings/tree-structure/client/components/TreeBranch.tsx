"use client";

import React from "react";
import { TreeLeaf } from "../types/TreeLeaf";
import { DepthContext, useDepthLevel } from "../context/DepthContext";

export function TreeBranch(props: { leaf: TreeLeaf }) {
  const depthLevel = useDepthLevel();

  const [isExpanded, setIsExpanded] = React.useState(true);

  const onClick = React.useCallback(() => {
    setIsExpanded((v) => !v);
  }, []);

  const margin = `ml-[${depthLevel + 1}px]`;

  const style = React.useMemo(
    () => ({
      marginLeft: `${depthLevel + 1}rem`,
    }),
    [depthLevel],
  );

  return (
    <div className={`cursor-pointer ${margin}`} style={style}>
      <div onClick={onClick} className="flex flex-row text-xl">
        {props.leaf.children.length > 0 ? (
          <div className="-ml-1 mr-1 pl-1">{isExpanded ? "-" : "+"}</div>
        ) : null}
        <div>{props.leaf.name}</div>
      </div>

      <DepthContext.Provider value={depthLevel + 1}>
        {isExpanded
          ? props.leaf.children.map((childLeaf, index) => (
              <TreeBranch
                leaf={childLeaf}
                key={`child-leaf-${childLeaf.name}-${index}`}
              />
            ))
          : null}
      </DepthContext.Provider>
    </div>
  );
}
