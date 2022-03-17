import * as fs from 'fs';

const users: { name: string; profilePicUrl: string; }[] = [
    {name: 'Liam', profilePicUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=640&w=959'},
    {name: 'Olivia', profilePicUrl: 'https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    {name: 'Emma', profilePicUrl:'https://images.pexels.com/photos/1821095/pexels-photo-1821095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    {name: 'Clair', profilePicUrl: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'},
    {name: 'Oliver', profilePicUrl: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'},
    {name: 'Noah', profilePicUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    {name: 'Sandra', profilePicUrl: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    {name: 'Kunal', profilePicUrl: 'https://images.pexels.com/photos/718261/pexels-photo-718261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    {name: 'Gabriella', profilePicUrl: 'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    {name: 'Joe', profilePicUrl: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    {name: 'Lin', profilePicUrl: 'https://images.pexels.com/photos/8629122/pexels-photo-8629122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
];

const images: string[] = [
    'https://bakerpedia.com/wp-content/uploads/2020/06/Pastry_baking-processes-e1593464950587.jpg',
    'https://media.bakingo.com/assorted-velvet-pineapple-truffle-pastries-past2307flav-A.jpg',
    'https://cdn.tarladalal.com/members/9306/big/big_white_forest_pastry_(_cakes_and_pastries)-4278.jpg',
    "https://www.pattysaveurs.com/images/articles/apricot-and-vanilla-pastries/pinterest2x3.jpg",
    "https://img.freepik.com/free-photo/side-view-mix-cookies-with-walnut-chocolate-chips-cottage-cheese-puff-pastry-vanilla-sugar-powder_141793-5018.jpg?size=626&ext=jpg",
    "https://assets.dmagstatic.com/wp-content/uploads/2021/07/Bresnan-Bread-1024x683.jpg",
    "https://cdn.shopify.com/s/files/1/0521/3929/4884/products/EgglessOpiumPastry2.jpg?v=1632141189",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA9PnTMvb0HvK5OfAV3aqjWGbb_IgVZAW0bg&usqp=CAU",
    "https://www.bakemag.com/ext/resources/images/2021/8/FrenchPastryMadeSimple.jpg?t=1629128427&width=1080",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRsYJZFbFSB6-j3lQIB-aWkO6v_1VDIIZYaA&usqp=CAU",
    "https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2019/10/11/Food/Images/FD-BringIt_10_16_071.jpg?t=20170517",
    "https://cdn.tasteatlas.com/Images/Dishes/76c513e6c3214386b6c1dd9c98a564cc.jpg?w=375&h=280",
    "https://images.ctfassets.net/3s5io6mnxfqz/27IDUVjoMden5iMR9fKzvl/178a6e75b7af9e28d7e0eaaf577cb405/AdobeStock_157584719.jpeg?fm=jpg&w=800&fl=progressive",
    "https://dairyfarmersofcanada.ca/sites/default/files/styles/recipe_image/public/image_file_browser/conso_recipe/white-chocolate-cream-filled-pastries.jpg.jpeg?itok=Sx-lOcmi",
    "https://handletheheat.com/wp-content/uploads/2016/02/best-chocolate-cupcakes-recipe-SQUARE.jpg",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/healthiest-chocolate-brands-on-the-market-1580750259.png?crop=1.00xw:0.752xh;0,0.0721xh&resize=1200:*",
    "https://assets.epicurious.com/photos/6070b92dab8bd2c2fd18ee30/4:3/w_3814,h_2860,c_limit/ChocolateBakingBars_HERO_040821_12624_final.jpg",
    "https://www.thespruceeats.com/thmb/G6FaiLRnTiC_MJxQ-HljZ0gcwGc=/2667x2000/smart/filters:no_upscale()/chocolate-dipped-marshmallows-521078-hero-01-7433ca6fcdb5478e8c1f1f4eb4b9ac21.jpg",
];

const getRandomInt = (limit: number) => parseInt(`${Math.random()*limit}`, 10);
const LIMIT = 10;
const generateRandomPosts = (startingId: number) => {
    let count = 0;
    let id = startingId;
    const posts = [];
    while(count < LIMIT) {
        const randomUser = users[getRandomInt(users.length)];
        const randomPost = images[getRandomInt(images.length)];
        posts.push({
            id,
            name: randomUser.name,
            profilePic: randomUser.profilePicUrl,
            imageUrl: randomPost,
            createdAt: new Date(Date.now() - getRandomInt(86400000*30)),
            likes: parseInt(`${Math.random()*1000}`, 10)
        });
        count++;
        id++;
    }
    return posts;
}


for (let i=0;i<10;i++) {
    fs.writeFile(`posts/${i+1}`, JSON.stringify(generateRandomPosts(10*(i) + 1)), () => {
        console.log('write file complete');
    });
}
