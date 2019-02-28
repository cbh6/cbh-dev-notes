# Config spring-boot (jhipster) with oracle-11g

Sólo soportan a partir de la versión 12 de oracle. Se puede configurar aunque no está oficialmente soportado.

https://stackoverflow.com/questions/46183331/why-jhipster-use-oracle-12c-configuration-is-there-any-issue-if-using-oracle-11


```xml
<repository>
<!-- Repository for ORACLE ojdbc6-->
<id>codelds</id>
<url>https://code.lds.org/nexus/content/groups/main-repo</url>
</repository>

<dependency>
<groupId>com.oracle</groupId>
<artifactId>ojdbc6</artifactId>
<version>11.2.0.3</version>
</dependency>
``` 

# Config authentication in order to get oracle drivers

https://blogs.oracle.com/dev2dev/get-oracle-jdbc-drivers-and-ucp-from-oracle-maven-repository-without-ides

# Hibernate dialect for oracle database 11g

https://stackoverflow.com/questions/4369944/hibernate-dialect-for-oracle-database-11g

http://docs.jboss.org/hibernate/orm/3.6/reference/en-US/html/session-configuration.html#configuration-optional-dialects