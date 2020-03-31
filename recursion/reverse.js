const reverse = (str, i = 0) => {
  let newString = "";
  if (newString.length === str.length) return newString.join("");

  newString.concat(str[str.length - i]);
  i -= 1;
  return reverse(str, i);
};

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

const rev = reverse("awesome");
console.log(rev);
