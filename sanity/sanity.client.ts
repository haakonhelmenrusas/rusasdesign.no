import { createClient, type ClientConfig } from '@sanity/client';
import { apiVersion, projectId } from '../env';

const config: ClientConfig = {
	projectId: projectId,
	dataset: 'production',
	apiVersion: apiVersion,
	useCdn: false,
};

const client = createClient(config);

export default client;
