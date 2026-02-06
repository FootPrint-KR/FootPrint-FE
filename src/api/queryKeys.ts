export const queryKeys = {
  posts: {
    all: ["posts"] as const,
    list: (params?: Record<string, unknown>) => ["posts", "list", params] as const,
    detail: (id: number) => ["posts", "detail", id] as const,
  },
  regions: {
    all: ["regions"] as const,
    cities: (regionId: number) => ["regions", "cities", regionId] as const,
  },
  categories: {
    all: ["categories"] as const,
    sub: (categoryId: number) => ["categories", "sub", categoryId] as const,
  },
  user: {
    all: ["user"] as const,
    me: () => ["user", "me"] as const,
  },
} as const;
