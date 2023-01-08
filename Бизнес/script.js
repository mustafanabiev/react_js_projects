const tocount = document.getElementById('tocount');
const reset = document.getElementById('reset');

const changeHandler = e => {
    const value = e.value
    e.value =  value.replace(/\D/g, '')
}
tocount.onclick = () => {
    let tovarUain = parseFloat(document.getElementById('uain').value);
    let kg = parseFloat(document.getElementById('kg').value);
    let kargo = parseFloat(document.getElementById('kargo').value);
    let dollar = parseFloat(document.getElementById('dollar').value);
    let shtuk = parseFloat(document.getElementById('shtuk').value);
    let som = parseFloat(document.getElementById('som').value);
    let result = document.getElementById('result');

    result.innerText +='Жыйынтык:' + ((tovarUain*som)+(kg*kargo*dollar))/shtuk  +' coм';


}
reset.onclick = () => {
    document.getElementById('uain').value = ''
    document.getElementById('som').value = ''
    document.getElementById('kg').value = ''
    document.getElementById('kargo').value = ''
    document.getElementById('dollar').value = ''
    document.getElementById('shtuk').value = ''
    document.getElementById('result').innerText = ''


}