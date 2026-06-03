import { test, expect } from '@playwright/test';

const BASE_URL = 'https://conduit.mate.academy/api';

test.describe('Conduit API', () => {
    test('GET /articles - return list of articles', async ({ request }) => {
        const response = await request.get(`${BASE_URL}/articles`);
        expect(response.status()).toBe(200);
        const body = await response.json();
        expect(body).toHaveProperty('articles');
        expect(body).toHaveProperty('articlesCount');
        expect(Array.isArray(body.articles)).toBe(true);
        expect(body.articles.length).toBeGreaterThan(0);
    });

    test('GET /articles - response has correct structure', async ({ request }) => {
        const response = await request.get(`${BASE_URL}/articles`);
        const body = await response.json();
        const firstArticle = body.articles[0];
        expect(firstArticle).toHaveProperty('title');
        expect(firstArticle).toHaveProperty('description');
        expect(firstArticle).toHaveProperty('author');
        expect(firstArticle).toHaveProperty('tagList');
        expect(firstArticle).toHaveProperty('createdAt');
        expect(typeof firstArticle.title).toBe('string');
        expect(typeof firstArticle.author).toBe('object');
    });

    test('GET /tags - returns list of tags', async ({ request }) => {
        const response = await request.get(`${BASE_URL}/tags`);
        expect(response.status()).toBe(200);
        const body = await response.json();
        expect(body).toHaveProperty('tags');
        expect(Array.isArray(body.tags)).toBe(true);
        expect(body.tags.length).toBeGreaterThan(0);
    });

    test('GET /articles with limit - respects query params', async ({ request }) => {
        const response = await request.get(`${BASE_URL}/articles?limit=5`);
        expect(response.status()).toBe(200);
        const body = await response.json();
        expect(body.articles.length).toBeLessThanOrEqual(5);
    });

});