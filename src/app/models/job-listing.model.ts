export type JobListing = {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

export const isJobListing = (object: any): object is JobListing => {
  if (!Array.isArray(object.languages) || !Array.isArray(object.tools)) {
    return false;
  }

  for (const language of object.languages) {
    if (typeof language !== 'string') {
      return false;
    }
  }
  for (const tool of object.tools) {
    if (typeof tool !== 'string') {
      return false;
    }
  }

  return (
    object.id &&
    typeof object.id === 'number' &&
    object.company &&
    typeof object.company === 'string' &&
    object.logo &&
    typeof object.logo === 'string' &&
    object.new !== (null || undefined) &&
    typeof object.new === 'boolean' &&
    object.featured != (null || undefined) &&
    typeof object.featured === 'boolean' &&
    object.position &&
    typeof object.position === 'string' &&
    object.role &&
    typeof object.role === 'string' &&
    object.level &&
    typeof object.level === 'string' &&
    object.postedAt &&
    typeof object.postedAt === 'string' &&
    object.contract &&
    typeof object.contract === 'string' &&
    object.location &&
    typeof object.location === 'string'
  );
};

export default JobListing;
