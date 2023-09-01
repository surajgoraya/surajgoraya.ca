<script>

    /**
     * @description A component to help standardize SEO optimization,
     * this was needed so that we could move away from using SvelteSEO
     * which has been deprecated for the most part.
     * 
     * @version 0.1
     * 
     * TODO: Make it so that you can change the social media image.
    */
	
    import { MetaTags } from "svelte-meta-tags";
   
    let title, description, keywords, author, type, permalink;
    
    export {title, description, keywords, type, permalink};

    title = `suraj goraya - ${title}`;
    
    author = 'suraj goraya';

    if(permalink === null || permalink === undefined) {
        
        //in this case the 'type' param should act like the permalink.
        permalink = '';
    }
    
    keywords = `suraj goraya, computer science student, undergraduate student, designer toronto, developer toronto, music producer, ${keywords}`

</script>

<MetaTags 
title={`${title}`}
description={description}
additionalMetaTags={[
    {
        name: 'keywords',
        content: keywords,
    },
    {
        name: 'author',
        content: author,
    },
]}
openGraph={{
    title: title,
    description: description,
    url: `https://surajgoraya.ca/${type}/${permalink}`,
    type: 'website',
    images: [
        {
            url: 'https://surajgoraya.ca/perma/cover.jpg',
            width: 4000,
            height: 2250,
            alt: 'A black and white picture of Suraj, standing looking down',
        },
    ],
}}
twitter={{
    site: '@surajgoraya',
    handle: 'surajgoraya',
    title: `${title}`,
    description: `${description}`,
    url: 'https://surajgoraya.ca/perma/cover.jpg',
    imageAlt: 'A black and white picture of Suraj, standing looking down',
}}/>