import { z } from "zod";

/**
 * Membership form schema — expanded in Participate sprint.
 */
export const membershipStepIdentitySchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
});

export type MembershipStepIdentity = z.infer<typeof membershipStepIdentitySchema>;
