
const GCF = (a, b) => {
	if (b % a == 0){
		return b;
	}
	return GCF(b, b%a);
};

exports.GCF = GCF;