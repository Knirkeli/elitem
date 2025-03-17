// export const apiVersion =
//   process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-31";

// export const dataset = assertValue(
//   process.env.NEXT_PUBLIC_SANITY_DATASET,
//   "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
// );

// export const projectId = assertValue(
//   process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
// );

// export const useCdn = false;

// function assertValue<T>(v: T | undefined, errorMessage: string): T {
//   if (v === undefined) {
//     throw new Error(errorMessage);
//   }

//   return v;
// }

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-31";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

export const useCdn = false;

export const resendApiKey = process.env.RESEND_API_KEY || "dummy_value";
export const resendAudienceId = process.env.RESEND_AUDIENCE_ID || "dummy_value";

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}