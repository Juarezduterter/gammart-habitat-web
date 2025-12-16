import type {
  Article,
  Realisation,
  Page,
  Header,
  Footer,
  PaginatedResponse,
  Zone,
  TypeTravaux,
  CategorieBlog,
  TagBlog,
} from '@/types/payload'

const CMS_URL =
  process.env.NEXT_PUBLIC_CMS_URL || 'https://gammart-habitat-cms-production.up.railway.app'

// Helper pour construire les URLs avec paramètres
function buildUrl(endpoint: string, params?: Record<string, any>): string {
  const url = new URL(`${CMS_URL}${endpoint}`)

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.append(key, String(value))
      }
    })
  }

  return url.toString()
}

// Helper pour gérer les erreurs
async function fetchAPI<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(endpoint, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    next: {
      revalidate: 60, // Revalidate every 60 seconds
    },
  })

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`)
  }

  return response.json()
}

// ===== ARTICLES (Blog) =====

export async function getArticles(
  limit = 10,
  page = 1,
  filters?: {
    category?: string
    tag?: string
    status?: 'draft' | 'published'
  }
): Promise<PaginatedResponse<Article>> {
  const params: Record<string, any> = {
    limit,
    page,
    sort: '-publishedAt',
  }

  if (filters?.status) {
    params['where[status][equals]'] = filters.status
  }
  if (filters?.category) {
    params['where[categories][equals]'] = filters.category
  }
  if (filters?.tag) {
    params['where[tags][equals]'] = filters.tag
  }

  const url = buildUrl('/api/articles', params)
  return fetchAPI<PaginatedResponse<Article>>(url)
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const url = buildUrl('/api/articles', {
    'where[slug][equals]': slug,
    'where[status][equals]': 'published',
    limit: 1,
  })

  const response = await fetchAPI<PaginatedResponse<Article>>(url)
  return response.docs[0] || null
}

export async function getArticleById(id: string): Promise<Article> {
  const url = buildUrl(`/api/articles/${id}`)
  return fetchAPI<Article>(url)
}

// ===== RÉALISATIONS =====

export async function getRealisations(
  limit = 10,
  page = 1,
  filters?: {
    zone?: string
    typeTravaux?: string
    status?: 'draft' | 'published'
  }
): Promise<PaginatedResponse<Realisation>> {
  const params: Record<string, any> = {
    limit,
    page,
    sort: '-dateRealisation',
  }

  if (filters?.status) {
    params['where[status][equals]'] = filters.status
  }
  if (filters?.zone) {
    params['where[zone][equals]'] = filters.zone
  }
  if (filters?.typeTravaux) {
    params['where[typesTravaux][equals]'] = filters.typeTravaux
  }

  const url = buildUrl('/api/realisations', params)
  return fetchAPI<PaginatedResponse<Realisation>>(url)
}

export async function getRealisationBySlug(slug: string): Promise<Realisation | null> {
  const url = buildUrl('/api/realisations', {
    'where[slug][equals]': slug,
    'where[status][equals]': 'published',
    limit: 1,
  })

  const response = await fetchAPI<PaginatedResponse<Realisation>>(url)
  return response.docs[0] || null
}

export async function getRealisationById(id: string): Promise<Realisation> {
  const url = buildUrl(`/api/realisations/${id}`)
  return fetchAPI<Realisation>(url)
}

// ===== PAGES =====

export async function getPages(): Promise<PaginatedResponse<Page>> {
  const url = buildUrl('/api/pages', {
    'where[status][equals]': 'published',
  })
  return fetchAPI<PaginatedResponse<Page>>(url)
}

export async function getPageBySlug(slug: string): Promise<Page | null> {
  const url = buildUrl('/api/pages', {
    'where[slug][equals]': slug,
    'where[status][equals]': 'published',
    limit: 1,
  })

  const response = await fetchAPI<PaginatedResponse<Page>>(url)
  return response.docs[0] || null
}

// ===== TAXONOMIES =====

export async function getZones(): Promise<PaginatedResponse<Zone>> {
  const url = buildUrl('/api/zones')
  return fetchAPI<PaginatedResponse<Zone>>(url)
}

export async function getTypesTravaux(): Promise<PaginatedResponse<TypeTravaux>> {
  const url = buildUrl('/api/types-travaux')
  return fetchAPI<PaginatedResponse<TypeTravaux>>(url)
}

export async function getCategoriesBlog(): Promise<PaginatedResponse<CategorieBlog>> {
  const url = buildUrl('/api/categories-blog')
  return fetchAPI<PaginatedResponse<CategorieBlog>>(url)
}

export async function getTagsBlog(): Promise<PaginatedResponse<TagBlog>> {
  const url = buildUrl('/api/tags-blog')
  return fetchAPI<PaginatedResponse<TagBlog>>(url)
}

// ===== GLOBALS =====

export async function getHeader(): Promise<Header> {
  const url = buildUrl('/api/globals/header')
  return fetchAPI<Header>(url)
}

export async function getFooter(): Promise<Footer> {
  const url = buildUrl('/api/globals/footer')
  return fetchAPI<Footer>(url)
}

// ===== HEALTH CHECK =====

export async function checkHealth(): Promise<{ status: string; timestamp: string; uptime: number }> {
  const url = buildUrl('/api/health')
  return fetchAPI(url)
}
