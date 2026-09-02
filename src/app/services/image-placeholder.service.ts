import { Injectable } from '@angular/core';

type PlaceholderType = 'doctor' | 'generic' | 'gallery';

@Injectable({
  providedIn: 'root'
})
export class ImagePlaceholderService {

  /**
   * Modern doctor profile placeholder
   */
  getDoctorPlaceholder(): string {
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 750"
      >
        <defs>
          <linearGradient id="doctorBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#F4F8FF"/>
            <stop offset="100%" stop-color="#E5F0FF"/>
          </linearGradient>
        </defs>

        <!-- Background -->
        <rect
          width="600"
          height="750"
          fill="url(#doctorBg)"
        />

        <!-- Decorative medical cross -->
        <g opacity=".12" fill="#2563EB">
          <rect
            x="480"
            y="80"
            width="24"
            height="90"
            rx="12"
          />
          <rect
            x="447"
            y="113"
            width="90"
            height="24"
            rx="12"
          />
        </g>

        <!-- Decorative circle -->
        <circle
          cx="100"
          cy="130"
          r="45"
          fill="#FFFFFF"
          opacity=".7"
        />

        <!-- Avatar background -->
        <circle
          cx="300"
          cy="280"
          r="150"
          fill="#FFFFFF"
        />

        <circle
          cx="300"
          cy="280"
          r="145"
          fill="none"
          stroke="#D8E7FF"
          stroke-width="3"
        />

        <!-- Head -->
        <circle
          cx="300"
          cy="235"
          r="62"
          fill="#D9E8F7"
        />

        <!-- Hair -->
        <path
          d="
            M245 230
            C245 170 355 170 355 230
            C340 205 325 195 300 195
            C275 195 258 208 245 230
            Z
          "
          fill="#94A3B8"
        />

        <!-- Neck -->
        <path
          d="M280 285 L280 320 L320 320 L320 285"
          fill="#D9E8F7"
        />

        <!-- Doctor body / coat -->
        <path
          d="
            M205 430
            C215 350 245 320 300 320
            C355 320 385 350 395 430
            Z
          "
          fill="#FFFFFF"
          stroke="#D8E7FF"
          stroke-width="3"
        />

        <!-- Shirt -->
        <path
          d="
            M275 325
            L300 365
            L325 325
            Z
          "
          fill="#2563EB"
          opacity=".9"
        />

        <!-- Coat collar -->
        <path
          d="M250 330 L300 390 L350 330"
          fill="none"
          stroke="#E2E8F0"
          stroke-width="4"
        />

        <!-- Stethoscope -->
        <path
          d="
            M255 350
            C255 410 345 410 345 350
          "
          fill="none"
          stroke="#2563EB"
          stroke-width="7"
          stroke-linecap="round"
        />

        <!-- Stethoscope chest piece -->
        <circle
          cx="345"
          cy="350"
          r="13"
          fill="#FFFFFF"
          stroke="#2563EB"
          stroke-width="6"
        />

        <!-- Bottom decorative wave -->
        <path
          d="
            M0 660
            C130 610 220 710 350 665
            C450 630 520 650 600 610
            L600 750
            L0 750
            Z
          "
          fill="#DCEAFF"
          opacity=".65"
        />

        <!-- Small medical cross -->
        <g
          transform="translate(80 500)"
          opacity=".15"
          fill="#2563EB"
        >
          <rect
            x="20"
            y="0"
            width="16"
            height="55"
            rx="8"
          />
          <rect
            x="0"
            y="20"
            width="55"
            height="16"
            rx="8"
          />
        </g>

        <!-- Label -->
        <text
          x="300"
          y="700"
          text-anchor="middle"
          font-family="Arial, sans-serif"
          font-size="20"
          font-weight="600"
          fill="#64748B"
        >
          Doctor profile
        </text>
      </svg>
    `)}`;
  }


  /**
   * Modern generic image placeholder
   * Suitable for services, facilities, departments, etc.
   */
  getGenericPlaceholder(): string {
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
      >
        <defs>
          <linearGradient id="genericBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#F8FAFC"/>
            <stop offset="100%" stop-color="#EFF6FF"/>
          </linearGradient>
        </defs>

        <!-- Background -->
        <rect
          width="800"
          height="600"
          fill="url(#genericBg)"
        />

        <!-- Decorative circles -->
        <circle
          cx="100"
          cy="100"
          r="70"
          fill="#DBEAFE"
          opacity=".45"
        />

        <circle
          cx="700"
          cy="500"
          r="100"
          fill="#E0F2FE"
          opacity=".5"
        />

        <!-- Image frame -->
        <rect
          x="275"
          y="130"
          width="250"
          height="190"
          rx="24"
          fill="#FFFFFF"
          stroke="#DCE7F5"
          stroke-width="3"
        />

        <!-- Image icon -->
        <circle
          cx="350"
          cy="190"
          r="18"
          fill="#BFDBFE"
        />

        <!-- Mountain/image -->
        <path
          d="
            M300 300
            L365 225
            L410 270
            L445 235
            L500 300
            Z
          "
          fill="#DBEAFE"
        />

        <path
          d="
            M300 300
            L365 225
            L410 270
            L445 235
            L500 300
          "
          fill="none"
          stroke="#93C5FD"
          stroke-width="6"
          stroke-linejoin="round"
        />

        <!-- Image frame shine -->
        <path
          d="M300 155 H500"
          stroke="#F1F5F9"
          stroke-width="6"
          stroke-linecap="round"
        />

        <!-- Main text -->
        <text
          x="400"
          y="390"
          text-anchor="middle"
          font-family="Arial, sans-serif"
          font-size="26"
          font-weight="600"
          fill="#334155"
        >
          Image coming soon
        </text>

        <!-- Supporting text -->
        <text
          x="400"
          y="425"
          text-anchor="middle"
          font-family="Arial, sans-serif"
          font-size="16"
          fill="#94A3B8"
        >
          High quality image will be available here
        </text>
      </svg>
    `)}`;
  }


  /**
   * Modern gallery / landscape placeholder
   */
  getGalleryPlaceholder(): string {
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 600"
      >
        <defs>
          <linearGradient id="galleryBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#F8FAFC"/>
            <stop offset="100%" stop-color="#EAF2FF"/>
          </linearGradient>
        </defs>

        <!-- Background -->
        <rect
          width="1200"
          height="600"
          fill="url(#galleryBg)"
        />

        <!-- Decorative circles -->
        <circle
          cx="120"
          cy="100"
          r="60"
          fill="#DBEAFE"
          opacity=".5"
        />

        <circle
          cx="1080"
          cy="500"
          r="80"
          fill="#E0F2FE"
          opacity=".6"
        />

        <!-- Gallery card -->
        <rect
          x="300"
          y="70"
          width="600"
          height="360"
          rx="28"
          fill="#FFFFFF"
          stroke="#DCE7F5"
          stroke-width="3"
        />

        <!-- Inner image area -->
        <rect
          x="330"
          y="100"
          width="540"
          height="300"
          rx="20"
          fill="#F8FAFC"
        />

        <!-- Sun -->
        <circle
          cx="790"
          cy="165"
          r="38"
          fill="#BFDBFE"
        />

        <!-- Mountains -->
        <path
          d="
            M330 390
            L470 250
            L570 340
            L670 220
            L870 390
            Z
          "
          fill="#DCEAFF"
        />

        <path
          d="
            M330 390
            L470 250
            L570 340
            L670 220
            L870 390
          "
          fill="none"
          stroke="#A9C9F5"
          stroke-width="6"
          stroke-linejoin="round"
        />

        <!-- Small foreground mountain -->
        <path
          d="
            M330 390
            L420 310
            L490 365
            L550 315
            L650 390
            Z
          "
          fill="#EEF5FF"
        />

        <!-- Text -->
        <text
          x="600"
          y="490"
          text-anchor="middle"
          font-family="Arial, sans-serif"
          font-size="25"
          font-weight="600"
          fill="#334155"
        >
          Gallery image
        </text>

        <text
          x="600"
          y="525"
          text-anchor="middle"
          font-family="Arial, sans-serif"
          font-size="16"
          fill="#94A3B8"
        >
          More photos coming soon
        </text>
      </svg>
    `)}`;
  }


  /**
   * Generic image error handler
   */
  handleImageError(
    event: Event,
    placeholderType: PlaceholderType = 'generic'
  ): void {
    const placeholder = this.getPlaceholder(placeholderType);

    const target = event.target as HTMLImageElement | null;

    if (target) {
      target.onerror = null;
      target.src = placeholder;
    }
  }


  /**
   * Get placeholder by type
   */
  getPlaceholder(
    type: PlaceholderType = 'generic'
  ): string {
    switch (type) {
      case 'doctor':
        return this.getDoctorPlaceholder();

      case 'gallery':
        return this.getGalleryPlaceholder();

      case 'generic':
      default:
        return this.getGenericPlaceholder();
    }
  }
}