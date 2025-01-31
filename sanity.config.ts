'use client';
/**
 * This config is used to set up Sanity Studio that's mounted on the `app/(sanity)/studio/[[...tool]]/page.tsx` route
 */
import { visionTool } from '@sanity/vision';
import { defineConfig, PluginOptions } from 'sanity';
import { defineDocuments, defineLocations, type DocumentLocation, presentationTool } from 'sanity/presentation';
import { structureTool } from 'sanity/structure';

import { apiVersion, dataset, projectId, studioUrl } from '@/sanity/lib/api';
import { pageStructure, singletonPlugin } from '@/sanity/plugins/settings';
import author from '@/sanity/schemas/documents/author';
import post from '@/sanity/schemas/documents/post';
import settings from '@/sanity/schemas/singletons/settings';
import { resolveHref } from '@/sanity/lib/utils';
import category from '@/sanity/schemas/documents/category';

const homeLocation = {
  title: 'Home',
  href: '/',
} satisfies DocumentLocation;

export default defineConfig({
  basePath: studioUrl,
  projectId,
  dataset,
  schema: {
    types: [
      settings,
      post,
      author,
      category,
    ],
  },
  plugins: [
    presentationTool({
      resolve: {
        mainDocuments: defineDocuments([
          {
            route: '/posts/:slug',
            filter: `_type == "post" && slug.current == $slug`,
          },
        ]),
        locations: {
          settings: defineLocations({
            locations: [homeLocation],
            message: 'This document is used on all pages',
            tone: 'caution',
          }),
          post: defineLocations({
            select: {
              title: 'title',
              slug: 'slug.current',
            },
            resolve: (doc) => ({
              locations: [
                {
                  title: doc?.title || 'Untitled',
                  href: resolveHref('post', doc?.slug)!,
                },
                homeLocation,
              ],
            }),
          }),
        },
      },
      previewUrl: { previewMode: { enable: '/api/draft-mode/enable' } },
    }),
    structureTool({ structure: pageStructure([settings]) }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([settings.name]),
    process.env.NODE_ENV === 'development' &&
    visionTool({ defaultApiVersion: apiVersion }),
  ].filter(Boolean) as PluginOptions[],
});
