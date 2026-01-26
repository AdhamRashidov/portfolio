const username: string = import.meta.env.VITE_GITHUB_USERNAME;

export const fetchRepos = async () => {
	const response = await fetch(
		`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
	);
	if (!response.ok) {
		throw new Error("GitHub ma'lumotlarini yuklashda xatolik yuz berdi");
	}

	const data = await response.json();
	console.log("Kelgan ma'lumotlar:", data); // Mana shu yerda natijani ko'rasiz

	return data;
};

export const fetchAllRepos = async () => {
	const response = await fetch(
		`https://api.github.com/users/${username}/repos?sort=created&per_page=100`
	);
	if (!response.ok) throw new Error("Barcha repolarni yuklashda xato!");

	const data = await response.json();
	console.log("Kelgan hamma repolar ma'lumotlar:", data); // Mana shu yerda natijani ko'rasiz

	return data;
};