import { TreeRoot } from "./client/TreeRoot";
import { TreeLeaf } from "./client/types/TreeLeaf";

const FakeTree: TreeLeaf[] = [
  {
    name: "My Music",
    children: [
      {
        name: "TOOL",
        children: [
          {
            name: "Fear Inoculum",
            children: [
              {
                name: "Fear Inoculum",
                children: [],
              },
              {
                name: "Pneuma",
                children: [],
              },
              {
                name: "Invincible",
                children: [],
              },
            ],
          },
          {
            name: "Lateralus",
            children: [],
          },
          {
            name: "10,000 Days",
            children: [],
          },
        ],
      },
    ],
  },
  {
    name: "My Games",
    children: [
      {
        name: "The Witcher 3",
        children: [],
      },
      {
        name: "Diablo",
        children: [
          {
            name: "Diablo 1",
            children: [],
          },
          {
            name: "Diablo 2",
            children: [],
          },
          {
            name: "Diablo 3",
            children: [
              {
                name: "Reaper of Souls",
                children: [],
              },
            ],
          },
          {
            name: "Diablo IV",
            children: [],
          },
        ],
      },
    ],
  },
];

export default function TreeStructure() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <TreeRoot rootLevelNodes={FakeTree} />
    </div>
  );
}
