import { Injectable, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  image?: string;
  url?: string;
  type?: string;
  schema?: Record<string, any>;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly defaultTitle = 'Pranjal Diagnostic & Healthcare Center | Pepsicola, Kathmandu';
  private readonly defaultDesc = 'Pranjal Diagnostic & Healthcare Center Pvt. Ltd. offers automated clinical pathology, digital X-Ray, 4D ultrasound (USG), ECG, echocardiography, specialist OPD clinics, physiotherapy, and on-site pharmacy in Pepsicola Townplanning, Kathmandu, Nepal.';
  private readonly defaultKeywords = 'Pranjal Healthcare, best doctor Kathmandu, best clinic Pepsicola, diagnostic center Kathmandu, pathology lab near me, digital X-Ray Nepal, USG ultrasound Kathmandu, specialist doctors Kathmandu, ECG, best hospital Pepsicola';
  private readonly baseUrl = 'https://pranjaldhc.com.np';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(DOCUMENT) private dom: Document
  ) {}

  /**
   * Set dynamic SEO tags for current page
   */
  updateSeo(config: Partial<SeoConfig>): void {
    const fullTitle = config.title 
      ? `${config.title} | Pranjal Healthcare` 
      : this.defaultTitle;
    const desc = config.description || this.defaultDesc;
    const keywords = config.keywords || this.defaultKeywords;
    const currentUrl = config.url ? `${this.baseUrl}${config.url}` : this.baseUrl;
    const image = config.image 
      ? (config.image.startsWith('http') ? config.image : `${this.baseUrl}/${config.image}`) 
      : `${this.baseUrl}/assets/images/home-page/banner/Building1.jpg`;
    const ogType = config.type || 'website';

    // Page Title
    this.titleService.setTitle(fullTitle);

    // Standard Meta Tags
    this.metaService.updateTag({ name: 'description', content: desc });
    this.metaService.updateTag({ name: 'keywords', content: keywords });
    this.metaService.updateTag({ name: 'author', content: config.author || 'Pranjal Diagnostic & Healthcare Center' });
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });

    // OpenGraph
    this.metaService.updateTag({ property: 'og:title', content: fullTitle });
    this.metaService.updateTag({ property: 'og:description', content: desc });
    this.metaService.updateTag({ property: 'og:url', content: currentUrl });
    this.metaService.updateTag({ property: 'og:type', content: ogType });
    this.metaService.updateTag({ property: 'og:image', content: image });
    this.metaService.updateTag({ property: 'og:site_name', content: 'Pranjal Diagnostic & Healthcare Center' });

    // Twitter Card
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: fullTitle });
    this.metaService.updateTag({ name: 'twitter:description', content: desc });
    this.metaService.updateTag({ name: 'twitter:image', content: image });

    // Canonical link
    this.updateCanonicalUrl(currentUrl);

    // Dynamic JSON-LD Schema
    if (config.schema) {
      this.setJsonLdSchema(config.schema);
    }
  }

  /**
   * SEO profile specifically tailored for a Specialist Doctor
   */
  setDoctorSeo(doctor: {
    index: number;
    title: string;
    titleNepali?: string;
    content: string;
    contentNepali?: string;
    department?: string;
    education?: string[];
    specializations?: string[];
    bio?: string;
    image?: string;
  }): void {
    const docName = doctor.title;
    const docDept = doctor.department || doctor.content || 'Specialist Doctor';
    const docDegree = doctor.education ? doctor.education.join(', ') : '';
    const specs = doctor.specializations ? doctor.specializations.join(', ') : '';
    
    const pageTitle = `${docName} (${docDegree}) - Best ${docDept} in Kathmandu`;
    const pageDesc = `Book appointment with ${docName} (${docDegree}), Senior ${docDept} at Pranjal Healthcare, Pepsicola, Kathmandu. Specializations: ${specs || doctor.content}. Highly recommended specialist doctor in Kathmandu.`;
    const pageKeywords = `${docName}, ${docName} Kathmandu, best ${docDept} Kathmandu, top doctor Nepal, ${doctor.titleNepali || ''}, Pranjal Healthcare doctors, specialist clinic Pepsicola, doctor appointment Kathmandu`;

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Physician',
      'name': docName,
      'alternateName': doctor.titleNepali || docName,
      'image': doctor.image ? `${this.baseUrl}/${doctor.image}` : `${this.baseUrl}/assets/images/logo.png`,
      'medicalSpecialty': docDept,
      'description': doctor.bio || pageDesc,
      'jobTitle': doctor.content,
      'worksFor': {
        '@type': 'MedicalOrganization',
        'name': 'Pranjal Diagnostic & Healthcare Center Pvt. Ltd.',
        'url': this.baseUrl,
        'telephone': '+977-9865370270',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Pepsicola Townplanning',
          'addressLocality': 'Kathmandu',
          'addressRegion': 'Bagmati',
          'addressCountry': 'NP'
        }
      },
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Pepsicola Townplanning',
        'addressLocality': 'Kathmandu',
        'addressRegion': 'Bagmati',
        'addressCountry': 'NP'
      }
    };

    this.updateSeo({
      title: pageTitle,
      description: pageDesc,
      keywords: pageKeywords,
      image: doctor.image,
      url: `/doctors-details/${doctor.index}`,
      type: 'profile',
      schema: schema
    });
  }

  /**
   * SEO profile specifically tailored for a Medical / Diagnostic Service
   */
  setServiceSeo(service: {
    index: number;
    title: string;
    subTitle?: string;
    subtitle?: string;
    details?: string;
    content?: string;
    image?: string | string[];
  }): void {
    const serviceName = service.title;
    const pageTitle = `Best ${serviceName} in Kathmandu, Nepal`;
    const detailsText = service.content || service.details || service.subtitle || service.subTitle || '';
    const pageDesc = detailsText 
      ? `${detailsText.slice(0, 155)}... High precision ${serviceName} at Pranjal Diagnostic & Healthcare Center, Pepsicola, Kathmandu.`
      : `High precision ${serviceName} with rapid same-day report turnaround at Pranjal Diagnostic & Healthcare Center, Pepsicola Townplanning, Kathmandu.`;
    
    const pageKeywords = `best ${serviceName} Kathmandu, ${serviceName} price Nepal, ${serviceName} near me, diagnostic lab Pepsicola, health test Kathmandu, Pranjal Healthcare`;

    const imageUrl = Array.isArray(service.image) 
      ? (service.image.length > 0 ? service.image[0] : undefined) 
      : service.image;

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'MedicalProcedure',
      'name': serviceName,
      'description': pageDesc,
      'howPerformed': 'Performed by licensed pathologists, radiologists, and certified medical technologists using automated medical diagnostic analyzers.',
      'offers': {
        '@type': 'Offer',
        'priceCurrency': 'NPR',
        'availability': 'https://schema.org/InStock',
        'seller': {
          '@type': 'MedicalOrganization',
          'name': 'Pranjal Diagnostic & Healthcare Center'
        }
      }
    };

    this.updateSeo({
      title: pageTitle,
      description: pageDesc,
      keywords: pageKeywords,
      image: imageUrl,
      url: `/our-services-details/${service.index}`,
      type: 'article',
      schema: schema
    });
  }

  /**
   * Update canonical link tag
   */
  private updateCanonicalUrl(url: string): void {
    let link: HTMLLinkElement | null = this.dom.querySelector("link[rel='canonical']");
    if (!link) {
      link = this.dom.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.dom.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  /**
   * Inject / Replace JSON-LD structured data script
   */
  private setJsonLdSchema(schema: Record<string, any>): void {
    const existingScript = this.dom.getElementById('dynamic-json-ld');
    if (existingScript) {
      existingScript.remove();
    }

    const script = this.dom.createElement('script');
    script.id = 'dynamic-json-ld';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    this.dom.head.appendChild(script);
  }
}
