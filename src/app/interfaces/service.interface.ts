export interface IServices {
    index: number;
    title: string;
    titleNepali?: string;
    image: string[];
    content: string;
    category?: string;
    categoryType?: 'specialist' | 'diagnostic';
    badge?: string;
    badgeNepali?: string;
    subtitle?: string;
    turnaround?: string;
    icon?: string;
    features?: string[];
    preparation?: string;
    benefits?: string[];
}

export interface IDoctors {
    index: number;
    title: string;
    titleNepali?: string;
    image: string;
    content: string;
    contentNepali?: string;
    education: string[];
    department?: string;
    departmentNepali?: string;
    experience?: string[];
    specializations?: string[];
    opdSchedule?: string;
    opdScheduleNepali?: string;
    bio?: string;
    rating?: number;
}
export interface IGallery {
    image: string;
    title?: string;
    category?: string;
    description?: string;
}