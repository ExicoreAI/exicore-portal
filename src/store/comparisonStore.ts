import { create } from 'zustand';

type ComparisonStore = {
  selectedRobotIds: string[];
  addRobot: (id: string) => void;
  removeRobot: (id: string) => void;
  clear: () => void;
};

export const useComparisonStore = create<ComparisonStore>((set) => ({
  selectedRobotIds: [],
  addRobot: (id) => set((state) => {
    // Avoid duplicates and limit to 5 robots for comparison
    if (state.selectedRobotIds.includes(id) || state.selectedRobotIds.length >= 5) {
      return state;
    }
    return { selectedRobotIds: [...state.selectedRobotIds, id] };
  }),
  removeRobot: (id) => set((state) => ({
    selectedRobotIds: state.selectedRobotIds.filter((robotId) => robotId !== id)
  })),
  clear: () => set({ selectedRobotIds: [] })
}));