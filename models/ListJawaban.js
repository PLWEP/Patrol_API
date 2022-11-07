module.exports = (sequelize, DataTypes) => {
	const ListJawaban = sequelize.define(
		"ListJawaban",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			id_ruangan: {
				type: DataTypes.CHAR,
				allowNull: false,
			},
			jawaban1: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			jawaban2: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			jawaban3: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			jawaban4: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			jawaban5: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			jawaban6: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			jawaban7: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			jawaban8: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			jawaban9: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			jawaban10: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			createdAt: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			updatedAt: {
				type: DataTypes.DATE,
				allowNull: false,
			},
		},
		{
			tableName: "list_jawaban",
		}
	);

	return ListJawaban;
};
