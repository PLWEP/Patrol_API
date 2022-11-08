module.exports = (sequelize, DataTypes) => {
	const ListRuangan = sequelize.define(
		"ListRuangan",
		{
			id: {
				type: DataTypes.CHAR,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			name: {
				type: DataTypes.TEXT,
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
			tableName: "list_ruangan",
		}
	);

	return ListRuangan;
};
