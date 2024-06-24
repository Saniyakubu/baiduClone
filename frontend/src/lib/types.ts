type SearchMetadata = {
  id: string;
  status: string;
  json_endpoint: string;
  created_at: string;
  processed_at: string;
  baidu_url: string;
  raw_html_file: string;
  total_time_taken: number;
};

type SearchParameters = {
  q: string;
  f: string;
  device: string;
  engine: string;
};

type SearchInformation = {
  query_displayed: string;
};

type RichSnippet = {
  extensions: string[];
};

type RelatedVideo = {
  title: string;
  link: string;
  image: string;
  duration: string;
};

type Tieba = {
  profile_link: string;
  image: string;
  heading: string;
  profile_stats: {
    followers: string;
    total_posts: string;
  };
  links: {
    text: string;
    link: string;
  }[];
  threads: {
    title: {
      text: string;
      link: string;
    };
    thread_replies: string;
    total_count: string;
  }[];
  source: string;
};

export type OrganicResult = {
  position: number;
  title: string;
  link: string;
  displayed_link?: string;
  snippet?: string;
  cached_page_link?: string;
  rich_snippet?: RichSnippet[];
  related_videos?: RelatedVideo[];
  tieba?: Tieba;
};

type DictionaryResults = {
  position: number;
  title: string;
  link: string;
  snippet?: string;
  displayed_link: string;
  type: string;
  english_word: string;
  british: {
    phonetic: string;
    chinese_character: string;
    audio_link: string;
  };
  american: {
    phonetic: string;
    chinese_character: string;
    audio_link: string;
  };
  definitions: string[][];
};

type AnswerBox = DictionaryResults[];

type Pagination = {
  current: number;
  next: string;
  other_pages: {
    [key: number]: string;
  };
};

type SerpapiPagination = {
  current: number;
  next_link: string;
  next: string;
  other_pages: {
    [key: number]: string;
  };
};

export type related = {
  query: string;
  link: string;
  serpapi_link: string;
};

export type otherSearches = {
  text: string;
  link: string;
  serpapi_link: string;
};

type BaiduSearchResult = {
  search_metadata: SearchMetadata;
  search_parameters: SearchParameters;
  search_information: SearchInformation;
  organic_results: OrganicResult[];
  answer_box?: AnswerBox;
  pagination: Pagination;
  serpapi_pagination: SerpapiPagination;
  related_searches?: related[];
  people_also_search_for?: otherSearches[];
};

export default BaiduSearchResult;
