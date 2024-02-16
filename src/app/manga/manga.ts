export interface Manga {
    mal_id: number;
    title: string;
    title_japanese: string;
    popularity: string;
    images: {
      webp: {
        image_url: string;
        small_image_url: string;
        large_image_url: string;
      };
    };
    synopsis: string;
  }
  
  export interface GetMangaResponse {
    data: Array<Manga>;
    pagination: {
      last_visible_page: number;
      has_next_page: boolean;
    };
  }
  
  export interface GetMangaDetailResponse {
    data: Manga;
  }
  