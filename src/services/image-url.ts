import noImage from '../assets/placeholder-image-600x400.webp'



const imageUrlGenerator = (url: string) =>{

    if(!url) return noImage;
    let target= 'media/';
    const index = url.indexOf(target) + target.length;
   return url.slice(0,index) + 'crop/600/400/' + url.slice(index);
}

export default imageUrlGenerator;