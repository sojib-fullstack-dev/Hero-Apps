 export const getData = async () => {
    const res = await fetch('https://hero-apps-sage.vercel.app/data.json');
    const data = await res.json();
    
   return data ? data:[]
    
}