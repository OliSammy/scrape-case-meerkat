import * as cheerio from 'cheerio';

async function getHTML(url: string){
    const response = await fetch(url);
    return await response.text();
}

export async function getContent(url: string){
    const html = await getHTML(url);
    const h1 = cheerio.load(html)('h1');
    return h1.text();
}