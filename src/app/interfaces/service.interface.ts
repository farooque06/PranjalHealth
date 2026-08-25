export interface IServices {
    index: number;
    title: string;
    image: string[];
    content: string;
    category?: string;
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
    image: string;
    content: string;
    education: string[];
    department?: string;
    experience?: string[];
    specializations?: string[];
    opdSchedule?: string;
    bio?: string;
    rating?: number;
}
export interface IGallery {
    image: string;
    title?: string;
    category?: string;
    description?: string;
}