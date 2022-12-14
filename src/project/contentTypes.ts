/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Project name: Music
 * Environment: Production
 * Project Id: ac256208-f87d-0098-2cec-d95d0c386c73
 */
export const contentTypes = {
  /**
   * Band
   * Last modified: Thu Sep 22 2022 13:35:58 GMT-0700 (Pacific Daylight Time)
   */
  band: {
    codename: 'band',
    id: 'a936559b-9c47-401e-9fd4-cc7cb04025c1',
    externalId: undefined,
    name: 'Band',
    elements: {
      /**
       * Name (text)
       */
      name: {
        codename: 'name',
        id: 'c10ea837-085e-461f-a382-e3c40e19c5c3',
        externalId: undefined,
        name: 'Name',
        required: false,
        type: 'text',
        snippetCodename: undefined,
      },

      /**
       * Bio (rich_text)
       */
      bio: {
        codename: 'bio',
        id: 'eb88233c-c3d0-4e44-b87c-d9a433b2f3b1',
        externalId: undefined,
        name: 'Bio',
        required: false,
        type: 'rich_text',
        snippetCodename: undefined,
      },

      /**
       * Performers (modular_content)
       */
      performers: {
        codename: 'performers',
        id: '1b3aa0db-df6b-4a85-8c7b-ce070a935f4b',
        externalId: undefined,
        name: 'Performers',
        required: false,
        type: 'modular_content',
        snippetCodename: undefined,
      },

      /**
       * Albums (modular_content)
       */
      albums: {
        codename: 'albums',
        id: '58fe1cc6-fbe2-4e80-ab08-ba45de190db6',
        externalId: undefined,
        name: 'Albums',
        required: false,
        type: 'modular_content',
        snippetCodename: undefined,
      },
    },
  },

  /**
   * Publisher
   * Last modified: Thu Sep 15 2022 14:43:27 GMT-0700 (Pacific Daylight Time)
   */
  publisher: {
    codename: 'publisher',
    id: 'e5cdb7a1-da72-4163-9e11-e874ab6c1912',
    externalId: undefined,
    name: 'Publisher',
    elements: {},
  },

  /**
   * Song
   * Last modified: Thu Sep 15 2022 14:19:50 GMT-0700 (Pacific Daylight Time)
   */
  song: {
    codename: 'song',
    id: '33cc5002-de47-4883-9bab-c13b9bd4e2f0',
    externalId: undefined,
    name: 'Song',
    elements: {
      /**
       * Title (text)
       */
      title: {
        codename: 'title',
        id: '2b699bf9-e9f9-488c-9129-dc5e8c9405dd',
        externalId: undefined,
        name: 'Title',
        required: false,
        type: 'text',
        snippetCodename: undefined,
      },

      /**
       * Length (text)
       */
      length: {
        codename: 'length',
        id: '1067da96-ab58-4aec-920c-606d66712c5d',
        externalId: undefined,
        name: 'Length',
        required: false,
        type: 'text',
        snippetCodename: undefined,
      },

      /**
       * Description (rich_text)
       */
      description: {
        codename: 'description',
        id: 'c8758cac-2c35-40dc-8416-20064f1c2cbd',
        externalId: undefined,
        name: 'Description',
        required: false,
        type: 'rich_text',
        snippetCodename: undefined,
      },

      /**
       * Lyrics (rich_text)
       */
      lyrics: {
        codename: 'lyrics',
        id: 'a2094727-3dd1-4bb4-b38c-88067ba9db3c',
        externalId: undefined,
        name: 'Lyrics',
        required: false,
        type: 'rich_text',
        snippetCodename: undefined,
      },
    },
  },

  /**
   * Instrument
   * Last modified: Fri Sep 16 2022 10:43:18 GMT-0700 (Pacific Daylight Time)
   */
  instrument: {
    codename: 'instrument',
    id: 'd341b81e-78d1-4d66-8c16-c753c18e97fa',
    externalId: undefined,
    name: 'Instrument',
    elements: {
      /**
       * Name (text)
       */
      name: {
        codename: 'name',
        id: 'badc6f49-80cf-4d25-b7e1-9318afd7e737',
        externalId: undefined,
        name: 'Name',
        required: false,
        type: 'text',
        snippetCodename: undefined,
      },
    },
  },

  /**
   * Album
   * Last modified: Fri Sep 16 2022 10:42:14 GMT-0700 (Pacific Daylight Time)
   */
  album: {
    codename: 'album',
    id: '9f3a6f51-81b8-497b-a381-cd32f7f1ad1d',
    externalId: undefined,
    name: 'Album',
    elements: {
      /**
       * Title (text)
       */
      title: {
        codename: 'title',
        id: '4369cbef-4998-4bb4-a489-e17c064ccfad',
        externalId: undefined,
        name: 'Title',
        required: true,
        type: 'text',
        snippetCodename: undefined,
      },

      /**
       * Band (modular_content)
       */
      band: {
        codename: 'band',
        id: 'a8fe47cb-62fd-4464-b980-0d7d780f7da9',
        externalId: undefined,
        name: 'Band',
        required: false,
        type: 'modular_content',
        snippetCodename: undefined,
      },

      /**
       * Songs (modular_content)
       */
      songs: {
        codename: 'songs',
        id: '50896b49-7825-435e-9d02-2295d0a03310',
        externalId: undefined,
        name: 'Songs',
        required: false,
        type: 'modular_content',
        snippetCodename: undefined,
      },

      /**
       * Date (text)
       */
      date: {
        codename: 'date',
        id: 'de7c3a17-cd89-4ac5-8e06-0ff644b06a7b',
        externalId: undefined,
        name: 'Date',
        required: false,
        type: 'text',
        snippetCodename: undefined,
      },

      /**
       * Description (text)
       */
      description: {
        codename: 'description',
        id: 'fe3e1d5e-3442-4436-9db4-006261edf5e2',
        externalId: undefined,
        name: 'Description',
        required: false,
        type: 'text',
        snippetCodename: undefined,
      },

      /**
       * Cover Art (modular_content)
       */
      cover_art: {
        codename: 'cover_art',
        id: '7d3079bc-d30d-4896-b2fa-5cdc32072988',
        externalId: undefined,
        name: 'Cover Art',
        required: false,
        type: 'modular_content',
        snippetCodename: undefined,
      },

      /**
       * Genre (taxonomy)
       */
      genre: {
        codename: 'genre',
        id: '8067b03a-fa41-4187-97e4-0b040c83ba8e',
        externalId: undefined,
        name: 'Genre',
        required: false,
        type: 'taxonomy',
        snippetCodename: undefined,
      },
    },
  },

  /**
   * Performers
   * Last modified: Fri Sep 16 2022 10:45:00 GMT-0700 (Pacific Daylight Time)
   */
  performers: {
    codename: 'performers',
    id: '227d1aeb-1a1e-4383-8e70-07b708594944',
    externalId: undefined,
    name: 'Performers',
    elements: {
      /**
       * Name (text)
       */
      name: {
        codename: 'name',
        id: '477d5385-7ec5-4fbe-b5fc-b35aa4f05a27',
        externalId: undefined,
        name: 'Name',
        required: true,
        type: 'text',
        snippetCodename: undefined,
      },

      /**
       * Instruments (modular_content)
       */
      instruments: {
        codename: 'instruments',
        id: '1f5af6b8-a3b6-42a7-b7cd-a0b2ea8ce8e0',
        externalId: undefined,
        name: 'Instruments',
        required: false,
        type: 'modular_content',
        snippetCodename: undefined,
      },
    },
  },

  /**
   * Media
   * Last modified: Tue Sep 20 2022 08:33:55 GMT-0700 (Pacific Daylight Time)
   */
  media: {
    codename: 'media',
    id: 'e5f238a3-5c12-4638-9813-d360482bab15',
    externalId: undefined,
    name: 'Media',
    elements: {
      /**
       * Asset (asset)
       */
      asset: {
        codename: 'asset',
        id: '9c2f46f4-65d7-42bd-86c2-2fe64edf3760',
        externalId: undefined,
        name: 'Asset',
        required: true,
        type: 'asset',
        snippetCodename: undefined,
      },
    },
  },
};
