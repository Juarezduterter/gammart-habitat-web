// Types pour Payload CMS

export interface Media {
  id: string
  alt?: string
  url: string
  filename: string
  mimeType: string
  filesize: number
  width?: number
  height?: number
  createdAt: string
  updatedAt: string
}

export interface Zone {
  id: string
  nom: string
  slug: string
  description?: string
}

export interface TypeTravaux {
  id: string
  nom: string
  slug: string
  description?: string
  icone?: Media
}

export interface CategorieBlog {
  id: string
  nom: string
  slug: string
  description?: string
}

export interface TagBlog {
  id: string
  nom: string
  slug: string
}

export interface Article {
  id: string
  title: string
  slug: string
  excerpt?: string
  content?: any // Rich text content
  featuredImage?: Media
  author?: {
    id: string
    name: string
  }
  categories?: CategorieBlog[]
  tags?: TagBlog[]
  publishedAt: string
  readTime?: number
  seo?: {
    title?: string
    description?: string
    keywords?: string
  }
  createdAt: string
  updatedAt: string
  status: 'draft' | 'published'
}

export interface Realisation {
  id: string
  title: string
  slug: string
  description?: string
  content?: any // Rich text content
  featuredImage?: Media
  gallery?: Media[]
  zone?: Zone
  typesTravaux?: TypeTravaux[]
  address?: string
  city?: string
  zipCode?: string
  performanceAvant?: string
  performanceApres?: string
  dateRealisation?: string
  duree?: string
  budget?: string
  highlights?: string[]
  seo?: {
    title?: string
    description?: string
    keywords?: string
  }
  createdAt: string
  updatedAt: string
  status: 'draft' | 'published'
}

export interface Page {
  id: string
  title: string
  slug: string
  content?: any // Rich text content
  seo?: {
    title?: string
    description?: string
    keywords?: string
  }
  createdAt: string
  updatedAt: string
  status: 'draft' | 'published'
}

export interface Header {
  logo?: Media
  navigation?: Array<{
    label: string
    url: string
    subMenu?: Array<{
      label: string
      url: string
    }>
  }>
  ctaButton?: {
    label: string
    url: string
  }
}

export interface Footer {
  logo?: Media
  description?: string
  socialLinks?: Array<{
    platform: string
    url: string
  }>
  menus?: Array<{
    title: string
    links: Array<{
      label: string
      url: string
    }>
  }>
  contact?: {
    phone?: string
    email?: string
    address?: string
  }
  legal?: {
    copyright?: string
  }
}

// API Response types
export interface PaginatedResponse<T> {
  docs: T[]
  totalDocs: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage: number | null
  nextPage: number | null
}

export interface SingleResponse<T> {
  doc: T
}
