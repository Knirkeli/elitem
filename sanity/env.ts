export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-03-24";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing NEXT_PUBLIC_SANITY_DATASET environment variable"
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable"
);

export const sanityApiReadToken = assertValue(
  process.env.SANITY_API_READ_TOKEN,
  "Missing SANITY_API_READ_TOKEN environment variable"
);


export const useCdn = false;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}