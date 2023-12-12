
import { Genre } from "../hooks/useGenres";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";

export interface Game {
    id: number;
    name: string;
    slug: string;
    background_image:string;
    parent_platforms: {platform:Platform}[];
    metacritic: number;
    released: string;
    description: string;
    publishers: Publisher[];
    genres: Genre[]
  
  }