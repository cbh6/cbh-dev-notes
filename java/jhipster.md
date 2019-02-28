# oracle-jhipster config entities and hibernate to generate id based on db sequences

[info](ttps://stackoverflow.com/questions/9861416/hibernate-generates-negative-id-values-when-using-a-sequence)

Modificando el domain que genera jhipster para que coja la sequence de base de datos y configurando el allocationSize que debe ser el mismo que el increment de la secuencia

```java
@Entity
@Table(name = "fondos")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Fondos implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "fondosSeq")
    @SequenceGenerator(name = "fondosSeq", sequenceName = "fondos_id_seq", allocationSize = 1)
    private Long id;
. . .
```

Configurando el application.dev.yml (habrá que hacer lo mismo para el de prod cuando se despliegue) con el hibernate id mapping generator a false

```yml
    jpa:
        database-platform: org.hibernate.dialect.Oracle10gDialect
        database: ORACLE
        show-sql: true
        properties:
            hibernate.id.new_generator_mappings: false
```

Y con una sentencia sql que actualice el valor de la secuencia al último id (esto se debe hacer a mano)

```sql
SELECT max(id) FROM fondos; -- Devuelve 24
ALTER SEQUENCE fondos_id_seq  INCREMENT BY 25;
SELECT fondos_id_seq.nextval FROM dual;
ALTER SEQUENCE fondos_id_seq  INCREMENT BY 1;
SELECT fondos_id_seq.currval FROM dual;
```
