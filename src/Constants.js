/**
 * Single ordered list: add/reorder/remove entries here only.
 * Posts (lookup by slug), Photos (grid), and prev/next order all follow this array.
 * more_images[0] - main image for grid view
 * If we ever want a different cover than first detail image, 
 * we can add an optional gridSrc field
 */
const illustrations = [
    {
        slug: 'fear',
        title: 'Fear',
        description: `This is a redraw of a piece I did in 2022 based on the prompt Fear,
         from Beatrice Blue's Childhood Week challenge. It's based on my own childhood memory when I
         had to learn how to dive off the board for the first time.`,
        more_images: [
            '../images/illustrations/Fears.jpg',
            '../images/illustrations/Fear_Process.jpg',
        ],
        grid: { width: 576, height: 720 },
    },
    {
        slug: 'courage',
        title: 'Courage',
        description: `This is the second panel, accompanying the first piece I did called Fear.
        Since I first drew the first piece, this second one is actually pretty reflective of how
        I currently feel about my future and career path. I created that first piece when I was
        still early in pursuing kidlit illustration and I feel like I am currently in the middle of
        taking a leap in investing in myself and hoping it will work out.`,
        more_images: [
            '../images/illustrations/Courage.jpg',
        ],
        grid: { width: 576, height: 720 },
    },
    {
        slug: 'joy',
        title: 'Joy',
        description: `This is the third panel, accompanying the first piece I did called Fear.
        I hope this is where I'll be in a few years with my career :)`,
        more_images: [
            '../images/illustrations/Joy.jpg',
        ],
        grid: { width: 576, height: 720 },
    },
    {
        slug: 'lily-scared',
        title: 'Lily Scared',
        description: `Part of a manuscript that I am working on about a shy introverted
        frog who loses her voice. This is a page where Lily gets stage fright.`,
        more_images: [
            '../images/illustrations/Lily_Scared.jpg',
            '../images/illustrations/Lily_Gestures.jpg',
            '../images/illustrations/frog.JPG',
            '../images/illustrations/frog_sketch.JPG',
        ],
        grid: { width: 2400, height: 1500 },
    },
    {
        slug: 'lily-scatting',
        title: 'Lily Scatting',
        description: `Part of a manuscript that I am working on about a shy introverted
        frog who loses her voice. This is one of the last spreads where she finally
        gets her voice back.`,
        more_images: [
            '../images/illustrations/Lily_Scatting.jpg',
            '../images/illustrations/Lily_Dance.jpg',
            '../images/illustrations/frog.JPG',
            '../images/illustrations/frog_sketch.JPG',
        ],
        grid: { width: 2400, height: 1500 },
    },
    {
        slug: 'downtown',
        title: 'Downtown',
        description: `I made this as part of the IG challenge #animaladventuresweek for the prompt
       "Downtown". This picture also sparked the start of my pigeon comics, many of which are
       inspired by my walks around the city. I always get a lot of ideas when I visit New York
       of course too. Visit the Comics tab for more!`,
        more_images: [
            '../images/illustrations/Downtown.jpg',
            '../images/comics/Opposable_Thumbs.jpg',
        ],
        grid: { width: 2400, height: 2400 },
    },
    {
        slug: 'gardendog',
        title: 'Lost Dog Found',
        description: `I created this as part of a 4 day Warrior Art course I took with
            the artists Tanta and Ferrari. They taught us to draw from experiences
            and emotions that happen in our real life and to take lots of photos of 
            environments that inspire us as reference. Sometimes a photo doesn't capture
            all of the feelings we have in that moment and we can use art to do that. I
            was particularly inspired by this magical front yard I had sketched while doing a 
            stairway walk around SF. I had also recently visited SLO and our Airbnb had
            the cutest sleepy old dog in another very magical garden. I knew I wanted to 
            draw these two things and this was the result.`,
        more_images: [
            '../images/illustrations/Garden_Dog.jpg',
            '../images/illustrations/Garden_Dog_Sketches.jpg',
            '../images/illustrations/Garden_Dog_Process.jpg',
            '../images/illustrations/Garden_Dog_Reference.jpg',
            '../images/illustrations/Garden_Dog_Process2.JPG',
        ],
        grid: { width: 576, height: 720 },
    },
    {
        slug: 'goldilocks',
        title: 'Goldilocks and Her Three Bears',
        description: `I wanted to try doing some cover art so I thought about some
         popular fairytales and went with Goldilocks and the Three Bears. I thought about
         the parts of the plot that I wanted to show from the cover like how Goldilocks
         is clearly taking over the bears' home and how it seems to be Baby Bear that is 
         suffering the most... And this is what I came up with. Would you read this book?`,
        more_images: [
            '../images/illustrations/Goldilocks.jpg',
            '../images/illustrations/Goldilocks_Thumbnails.jpg',
            '../images/illustrations/Goldilocks_Value.jpg',
        ],
        grid: { width: 1800, height: 2400 },
    },
    {
        slug: 'janeausten',
        title: 'Jane Austen Festival',
        description: `I attended the 2025 Jane Austen Festival in Bath, England during 
        their 250th anniversary with a couple high school friends. The trip was the 
        definition of girlhood and living out all our high school dreams together. 
        I had such a magical time and wanted to capture that memory. The Celestial 
        Ball tied the whole trip together and it was especially funny that it was 
        practically 90% women. Turns out a lot of regency dance includes skipping 
        in a circle and that just felt even more like living out my childhood dreams. 
        I hope those feelings come through.`,
        more_images: [
            '../images/illustrations/Jane_Austen.jpg',
            '../images/illustrations/Jane_Austen_Reference.jpg',
        ],
        grid: { width: 720, height: 576 },
    },
    {
        slug: 'dragonboat-festival',
        title: 'Dragonboat Festival',
        description: `I made this piece as part of a 4 day Warrior Art course I took
         called Painting Festive Scenes with Gloria Félix. We each picked two festivals we wanted
         to illustrate that took place during the day and night. I picked the Chinese holiday
         Dragonboat Festival for my day scene. This is a holiday that consists of teams racing
         each other in dragonboats including a drummer at the front to keep the pace and guide. 
         We went through the process of research to thumbnails and composition to color roughs to shadow to 
         final line and color.`,
        more_images: [
            '../images/illustrations/Dragonboat_Festival.jpg',
            '../images/illustrations/Dragonboat_Research.jpg',
            '../images/illustrations/Dragonboat_Thumbnails.jpg',
            '../images/illustrations/Dragonboat_Color_Roughs_2.jpg',
            '../images/illustrations/Dragonboat_Color_Roughs_3.jpg',
            '../images/illustrations/Dragonboat_Color_Roughs_4.jpg'
        ],
        grid: { width: 2400, height: 1500 },
    },
    {
        slug: 'rollin',
        title: 'Rollin`',
        description: `As part of an exercise, I drew as many gestures of 
        kids playing as I could and then picked a few to finish with color.
        This one was from my own childhood photo, pedalling away on my Sesame Street
        3-wheeler.`,
        more_images: [
            '../images/illustrations/Rollin.jpg',
            '../images/illustrations/Rollin_photo.jpg',
            '../images/illustrations/Kids_playing.jpg',
        ],
        grid: { width: 3000, height: 3000 },
    },
    {
        slug: 'firecracker',
        title: 'Firecracker',
        description: `As part of an exercise, I drew as many gestures of 
        kids playing as I could and then picked a few to finish with color.
        This one was from my mom's childhood photo from when my uncle was lighting
        up firecrackers. She was the smaller one.`,
        more_images: [
            '../images/illustrations/Firecracker.jpg',
            '../images/illustrations/Firecracker_photo.jpg',
            '../images/illustrations/Kids_playing.jpg',
        ],
        grid: { width: 3000, height: 3000 },
    },
    {
        slug: 'cake',
        title: 'Cake',
        description: `As part of an exercise, I drew as many gestures of 
        kids playing as I could and then picked a few to finish with color.
        This one was from my mom's childhood photo where they were celebrating
        a birthday with the whole family. It's one of my favorite photos.`,
        more_images: [
            '../images/illustrations/Cake.jpg',
            '../images/illustrations/Cake_photo.jpg',
            '../images/illustrations/Kids_playing.jpg',
        ],
        grid: { width: 3000, height: 3000 },
    },
    {
        slug: 'chalkart',
        title: 'Chalk Art Havoc',
        description: `I created this as part of a 4 day Warrior Art course I took with
            the artists Tanta and Ferrari. They taught us to draw from experiences
            and emotions that happen in our real life and to take lots of photos of 
            environments that inspire us as reference. Sometimes a photo doesn't capture
            all of the feelings we have in that moment and we can use art to do that. I
            was inspired by this tennis court in Russian Hill SF that has beautiful views
            of the city. That day the court was also covered with cute chalk drawings. I 
            decided to use this place as a backdrop for a story.`,
        more_images: [
            '../images/illustrations/Chalk_Art.jpg',
            '../images/illustrations/Chalk_Art_Reference.jpg',
            '../images/illustrations/Chalk_Art_Process.JPG',
        ],
        grid: { width: 576, height: 720 },
    },
    {
        slug: 'hidenseek',
        title: 'Hide N Seek',
        description: `This piece was inspired by a trip to the Yorkshire Dales during
        an Orange Beak Picture Book retreat. There were a lot of very old graveyards
        and churches around the area. I liked how wonky and old the gravestones looked -
        you could really tell that they had been there for a long, long time. Compared
        to the graveyards I'd seen in California, these definitely had a longer history
        and I felt compelled to draw them so I did. I imagined a little story to go with it.`,
        more_images: [
            '../images/illustrations/Hide_N_Seek.jpg',
            '../images/illustrations/hidenseek_reference.jpg',
        ],
        grid: { width: 576, height: 720 },
    },
    {
        slug: 'hidden-tiles',
        title: 'Hidden Tiles at 16th Avenue',
        description: `I drew this as part of a banner art contest for SCBWI SF North 
        and East Bay's Oktoberfest. The theme was "Create an illustration that captures 
        the spark of renewal—through nature, solitude, imagination, or simply making 
        art for your Joy. Let the energy of San Francisco, the North and East Bay, and 
        your inner world shine through!" I was inspired by the 16th Avenue Tiles Steps
        in San Francisco and the beautiful mosaic art. I really enjoy city walks and sketching
        along the way. It's a big source of inspiration for myself so I decided to choose
        these steps as part of the art. I went back and took reference photos of myself and
        did some rough sketches while I was there.`,
        more_images: [
            '../images/illustrations/Hidden_Tiles.jpg',
            '../images/illustrations/Hidden_Tiles_Sketch.jpg',
            '../images/illustrations/Hidden_Tiles_Reference.jpg',
        ],
        grid: { width: 3200, height: 1600 },
    },
];

function detailSrcToGridSrc(detailPath) {
    return detailPath.replace(/^\.\.\//, './');
}

/** Ordered slugs — use for prev/next instead of relying on object key order */
export const illustrationSlugs = illustrations.map((item) => item.slug);

export const Posts = Object.fromEntries(
    illustrations.map(({ slug, title, description, more_images }) => [
        slug,
        { title, description, more_images },
    ])
);

export const Photos = illustrations.map(({ slug, more_images, grid }) => ({
    slug,
    src: detailSrcToGridSrc(more_images[0]),
    width: grid.width,
    height: grid.height,
}));
