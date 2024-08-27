function EsAnioBisiesto(anio) {
    if (anio%4===0) 
        return true; 
    else if (anio%100===0)
    return false;
}
export default EsAnioBisiesto;

