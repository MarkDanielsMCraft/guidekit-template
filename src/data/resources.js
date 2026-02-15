import { META } from '../constants/config';

/**
 * RESOURCES LIBRARY (TEMPLATE)
 * Replace the examples below with your verified sources.
 */

const RESOURCE_VERIFIED = META.lastUpdatedDate;

export const RESOURCES = [
  {
    id: "r1",
    title: "Documentation Hub",
    url: "https://example.com/docs",
    type: "Website",
    category: "Setup",
    tags: ["docs", "onboarding"],
    source: "official",
  },
  {
    id: "r2",
    title: "Design System Starter",
    url: "https://example.com/design-system",
    type: "Tool",
    category: "Content",
    tags: ["design", "ui"],
    source: "tool",
  },
  {
    id: "r3",
    title: "Launch Checklist",
    url: "https://example.com/launch",
    type: "Website",
    category: "Launch",
    tags: ["launch", "qa"],
    source: "learning",
  },
].map((resource) => ({ verified: RESOURCE_VERIFIED, ...resource }));
