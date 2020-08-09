const bahasaIndonesia = 90
const bahasaInggris = 89
const mtk = 80
const ipa = 69

// const ratarata = `Rata-rata = ${Math.round((bahasaIndonesia+bahasaInggris+mtk+ipa)/4)}`
const ratarata = `${(bahasaIndonesia+bahasaInggris+mtk+ipa)/4}`
console.log("Rata-rata = "+ratarata)

function grade(ratarata){
    if (ratarata >= 90){
        return "Grade = A"
    } else if (ratarata >=80 && ratarata <=89){
        return "Grade = B"
    } else if (ratarata >=70 && ratarata <=79){
        return "Grade = C"
    } else if (ratarata >=60 && ratarata <=69){
        return "Grade = D"
    } else if (ratarata >=0 && ratarata <=59){
        return "Grade = E"
    }
}
console.log(grade(ratarata))