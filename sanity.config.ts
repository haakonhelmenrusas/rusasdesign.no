import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { dataset, projectId } from './env';
import { schemaTypes } from './schemas';

export default defineConfig({
	name: 'default',
	title: 'My Place',
	basePath: '/studio',
	projectId: projectId,
	dataset: dataset,
	plugins: [deskTool()],
	schema: {
		types: schemaTypes,
	},
});
