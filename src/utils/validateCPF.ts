export default function validadeCPF(cpf: string): boolean {
	let sum: number;
	let rest: number;
	sum = 0;

	const cpfWithNoMask = cpf.replace(/[^\w\s]/gi, '');

	if (cpfWithNoMask === '00000000000') return false;

	for (let i = 1; i <= 9; i += 1)
		sum += Number(cpfWithNoMask.substring(i - 1, i)) * (11 - i);
	rest = (sum * 10) % 11;

	if (rest === 10 || rest === 11) rest = 0;
	if (rest !== Number(cpfWithNoMask.substring(9, 10))) return false;

	sum = 0;
	for (let i = 1; i <= 10; i += 1)
		sum += Number(cpfWithNoMask.substring(i - 1, i)) * (12 - i);
	rest = (sum * 10) % 11;

	if (rest === 10 || rest === 11) rest = 0;
	if (rest !== Number(cpfWithNoMask.substring(10, 11))) return false;
	return true;
}
