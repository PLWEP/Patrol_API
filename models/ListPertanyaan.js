module.exports = (sequelize, DataTypes) => {
	const ListPertanyaan = sequelize.define(
		"ListPertanyaan",
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
			pertanyaan1: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			pertanyaan2: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			pertanyaan3: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			pertanyaan4: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			pertanyaan5: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			pertanyaan6: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			pertanyaan7: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			pertanyaan8: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			pertanyaan9: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			pertanyaan10: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
		},
		{
			tableName: "list_pertanyaan",
		}
	);

	return ListPertanyaan;
};
