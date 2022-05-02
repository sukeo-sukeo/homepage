class Utill {
  cutChara(chara, limit) {
    if (typeof chara === "string" && chara.length > limit) {
      chara = chara.slice(0, limit) + "...";
    } else {
      chara = chara + "...";
    }
    return chara
  }
}

export { Utill };