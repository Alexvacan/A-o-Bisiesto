function EsAnioBisiesto(anio) {
    if (anio%400===0 && anio%100===0) 
        return true; 
    else if (anio%100===0)
    return false;
}
export default EsAnioBisiesto;

