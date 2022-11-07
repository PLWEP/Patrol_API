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
		},
		{
			tableName: "list_ruangan",
		}
	);

	return ListRuangan;
};
