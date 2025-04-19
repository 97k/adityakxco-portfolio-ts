import { ReactNode } from 'react';

export interface ImageType {
    src: string;
    alt: string;
    width: number;
    height: number;
}

export interface FileType {
    name?: string;
    path: string;
    type?: string;
}

export type ImageOrPathType = ImageType | string;
export type FileOrPathType = FileType | string;

export interface Experience {
    company: string;
    timeframe: string;
    role: string;
    achievements: string[];
    files?: FileOrPathType[];
    images: ImageOrPathType[];
}

export interface Skill {
    title: string;
    description: ReactNode;
    files?: FileOrPathType[];
    images: ImageOrPathType[];
}

export interface Institution {
    name: string;
    description: string;
    files?: FileOrPathType[];
}

export interface WorkSection {
    display: boolean;
    title: string;
    experiences: Experience[];
}

export interface TechnicalSection {
    display: boolean;
    title: string;
    skills: Skill[];
}

export interface StudiesSection {
    display: boolean;
    title: string;
    institutions: Institution[];
}

export interface AboutContent {
    label: string;
    title: string;
    description: string | ReactNode;
    tableOfContent: {
        display: boolean;
        subItems: boolean;
    };
    avatar: {
        display: boolean;
    };
    calendar: {
        display: boolean;
        link: string;
    };
    intro: {
        display: boolean;
        title: string;
        description: ReactNode;
    };
    work: WorkSection;
    technical: TechnicalSection;
    studies: StudiesSection;
} 